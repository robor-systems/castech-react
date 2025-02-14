export default {
    name: 'job',
    title: 'Job',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'responsibilities',
        title: 'Responsibilities',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'requirements',
        title: 'Requirements',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'mailTo',
        title: 'Email To',
        type: 'string',
      },
    ],
  }; 