import { octokit } from "@/lib/octokit";
import { unstable_cache as cache } from "next/cache";

// Default fallback data
const DEFAULT_STATS = {
  issues: 25,
  prs: 15,
  followers: 45,
  stars: 120,
};

export const getGHStats = cache(
  async () => {
    // Check if GitHub token exists
    if (!process.env.GITHUB_TOKEN) {
      console.warn("GitHub token not found, using fallback data");
      return DEFAULT_STATS;
    }

    try {
      const gql = String.raw;
      const { user } = await octokit.graphql<{
        user: {
          repositoriesContributedTo: { totalCount: number };
          pullRequests: { totalCount: number };
          openIssues: { totalCount: number };
          closedIssues: { totalCount: number };
          followers: { totalCount: number };
          repositories: {
            totalCount: number;
            nodes: {
              stargazers: { totalCount: number };
            }[];
            pageInfo: {
              hasNextPage: boolean;
              endCursor: string | null;
            };
          };
        };
      }>(
        gql`
          query ($login: String!) {
            user(login: $login) {
              pullRequests(first: 1) {
                totalCount
              }
              openIssues: issues(states: OPEN) {
                totalCount
              }
              closedIssues: issues(states: CLOSED) {
                totalCount
              }
              followers {
                totalCount
              }
              repositories(ownerAffiliations: OWNER, first: 100) {
                totalCount
                nodes {
                  stargazers {
                    totalCount
                  }
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          }
        `,
        { login: "2003nayan" }
      );

      return {
        issues: user.closedIssues.totalCount + user.openIssues.totalCount,
        prs: user.pullRequests.totalCount,
        followers: user.followers.totalCount,
        stars: user.repositories.nodes.reduce(
          (totalStars, repo) => totalStars + repo.stargazers.totalCount,
          0
        ),
      };
    } catch (error) {
      console.error("GitHub API error:", error);
      // Return fallback data on any error
      return DEFAULT_STATS;
    }
  },
  [],
  { revalidate: 3600 } // revalidates every 1 hour instead of 1 minute
);
