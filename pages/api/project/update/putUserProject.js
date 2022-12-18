import prisma from '../../../../utils/prisma';

export default async function main(req, res) {
  const {
    id,
    title,
    description,
    developmentStatus,
    difficulty,
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
    communicationId,
    devToolsId,
  } = req.body;
  console.log(
    id,
    title,
    description,
    developmentStatus,
    difficulty,
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
    communicationId,
    devToolsId
  );

  console.log(
    id,
    title,
    description,
    developmentStatus,
    difficulty,
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
    communicationId,
    devToolsId
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
        development_status: developmentStatus,
        difficulty_level: difficulty,
        developmentTool: {
          update: {
            where: {
              id: devToolsId,
            },
            data: {
              github: github || '',
              jira: jira || '',
              figma: figma || '',
              trello: trello || '',
              notion: notion || '',
            },
          },
        },
        communication: {
          update: {
            where: {
              id: communicationId,
            },
            data: {
              discord: discord || '',
              twitch: twitch || '',
              twitter: twitter || '',
              slack: slack || '',
            },
          },
        },
      },
    });

    return await res.json(projects);
  } catch (err) {
    console.error('Issue with putUserProject: ', err);
    return res.status(err.code);
  }
}
