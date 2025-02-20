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
      type: 'array',
      of: [{ type: 'block' }], 
    },
    {
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
      description: 'Toggle to show or hide this job listing',
      initialValue: true, // Default value
    },
  ],
};
