const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

const countComments = (comments) => {
  let total = 0;

  const count = (CommentArray) => {
    CommentArray.forEach((comment) => {
      total++;
      if (comment.replies) {
        count(comment.replies);
      }
    });
  };

  count(comments);
  return total;
};

const totalComments = countComments(comments);
console.log(`Total Komentar adalah ${totalComments}`);
// Output Total Komentar adalah 7
