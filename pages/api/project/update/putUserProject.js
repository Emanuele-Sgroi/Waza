import prisma from '../../../../utils/prisma';

export default async function main(req, res) {
  const {
    id,
    title,
    description,
    teamNeed,
    discord,
    twitch,
    twitter,
    slack,
    github,
    jira,
    figma,
    trello,
    notion,
  } = req.body;
  console.log(
    id,

    discord,
    twitch,
    twitter,
    slack,
    github,
    jira,
    figma,
    trello,
    notion
  );

  const teamMemberNumber = parseInt(teamNeed, 10);
  try {
    const projects = await prisma.project.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        description: description,
        team_need: teamMemberNumber,
        developmentTool: {
          upsert: [
            {
              create: {
                github: github,
                jira: jira,
                figma: figma,
                trello: trello,
                notion: notion,
              },
              update: {
                github: github || undefined,
                jira: jira || undefined,
                figma: figma || undefined,
                trello: trello || undefined,
                notion: notion || undefined,
              },
              where: {
                id: id,
              },
            },
          ],
        },
        communication: {
          upsert: [
            {
              create: {
                discord: discord || undefined,
                twitch: twitch || undefined,
                twitter: twitter || undefined,
                slack: slack || undefined,
              },
              update: {
                discord: discord || undefined,
                twitch: twitch || undefined,
                twitter: twitter || undefined,
                slack: slack || undefined,
              },
              where: {
                id: id,
              },
            },
          ],
        },
      },
    });

    return await res.json(projects);
  } catch (err) {
    console.error('Issue with Project[id]: ', err);
    return res.status(err.code);
  }
}
