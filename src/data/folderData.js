export const explorer = {
  name: "Folder-Tree",
  isFolder: true,
  childrens: [
    {
      name: "public",
      isFolder: true,
      childrens: [
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      childrens: [
        {
          name: "components",
          isFolder: true,
          childrens: [
            {
              name: "Header.js",
              isFolder: false,
            },
            {
              name: "Footer.js",
              isFolder: false,
            },
            {
              name: "Followers",
              isFolder: true,
              childrens: [
                {
                  name: "FollowersContainer.js",
                  isFolder: false,
                },
                {
                  name: "Followers.css",
                  isFolder: false,
                },
              ],
            },
          ],
        },

        {
          name: "App.js",
          isFolder: false,
        },
        {
          name: "Index.js",
          isFolder: false,
        },
        {
          name: "App.css",
          isFolder: false,
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};
