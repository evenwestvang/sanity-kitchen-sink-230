export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3bf3faf5151b89dab6c3bd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-230-studio',
                  apiId: 'a72e22b2-cf93-4873-8671-de9942f1f79d'
                },
                {
                  buildHookId: '5f3bf3fa93d27b90a31dadd3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-230',
                  apiId: '807258d5-4ced-4fa1-bc05-17d5bd279a83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-kitchen-sink-230',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-230.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
