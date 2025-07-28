import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const dummyComments = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  author: "Author Name",
  date: "10 February 2025",
  content: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
}));

const reactionTypes = ["Like", "Love", "Angry", "Sad"];

const Index = () => {
  const [postReaction, setPostReaction] = useState("Like");
  const [commentReactions, setCommentReactions] = useState(dummyComments.map(() => ""));
  const [currentPage, setCurrentPage] = useState(1);

  const commentsPerPage = 3;
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = dummyComments.slice(indexOfFirstComment, indexOfLastComment);

  const handleCommentReaction = (index: number, reaction: string) => {
    const updated = [...commentReactions];
    updated[index + indexOfFirstComment] = reaction;
    setCommentReactions(updated);
  };

  return (
    <div>
      <div>
        <p id="section">Section &gt; Sub-section</p>
        <h3>Loremmm ipsum dolor sit amet consectetur adipisicing</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          laboriosam, dolore placeat totam, architecto, aliquam hic quasi
        </p>
        <div id="box"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          laboriosam, dolore placeat totam, architecto, aliquam hic quasi Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Est aspernatur vel
          dicta laborum
        </p>
      </div>

      <div>
        <div id="profile_system">
          <div id="profile_pic"></div>
          <div id="profile_detail">
            <Link to="/author/Author%20Name" id="author_name" className="vertical_align">
              Author Name
            </Link>
            <p className="vertical_align">7 Jan, 2025</p>
          </div>
        </div>
        <hr />
        <div id="text">
          Lorem ipsum dolor sit amet consectetur adipisicing. Blanditiis nam id
          veritatis harum dolores, eaque autem sapiente reiciendis impedit
          atque, quos laborum vero tempore eos repellendus natus! Similique,
          ipsum quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque corporis et doloremque delectus quis eos eaque consequatur
          sequi quae ducimus maiores, quibusdam, porro earum magnam magni
          aliquam numquam odit quod!
        </div>
        <hr />
        <div id="react_box" className="flex justify-evenly items-center">
          {reactionTypes.map((type) => (
            <div
              key={type}
              className={`cursor-pointer ${postReaction === type ? "font-bold" : ""}`}
              onClick={() => setPostReaction(type)}
            >
              {type}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 mt-4 bg-gray-100">
        <h2 className="font-medium mb-2">20 Comments</h2>
        <input
          placeholder="Write your comment.."
          className="w-full p-2 border rounded mb-4"
        />
        {currentComments.map((comment, i) => (
          <div key={comment.id} className="mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-700"></div>
              <span className="font-medium text-sm">{comment.author}</span>
              <span className="text-xs text-gray-500">{comment.date}</span>
              <button className="text-xs ml-auto text-red-500">Report</button>
            </div>
            <p className="text-sm ml-8 text-gray-700 mt-1">{comment.content}</p>
            <div className="flex gap-2 ml-8 mt-1">
              {reactionTypes.map((type) => (
                <div
                  key={type}
                  className={`text-sm cursor-pointer ${commentReactions[i + indexOfFirstComment] === type ? "font-bold" : ""}`}
                  onClick={() => handleCommentReaction(i, type)}
                >
                  {type}
                </div>
              ))}
              <div className="text-sm cursor-pointer text-blue-500">Reply</div>
            </div>
          </div>
        ))}

        <div className="flex justify-center mt-4 gap-2">
          {[1, 2, 3, 4].map((page) => (
            <div
              key={page}
              className={`cursor-pointer px-2 py-1 border ${page === currentPage ? "bg-blue-400 text-white" : "bg-white text-black"}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
