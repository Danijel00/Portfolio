export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },

    {
      name: 'technology',
      title: 'Technology',
      type: 'string',
    },

    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    // {
    //   name: 'webm',
    //   title: 'WebM format',
    //   type: 'file',
    //   options: {
    //     accept: 'video/webm',
    //   },
    // },
    // {
    //   name: 'fallback',
    //   title: 'Fallback format',
    //   type: 'file',
    //   options: {
    //     accept: 'video/mp4',
    //   },
    // },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    },
  ],
}
