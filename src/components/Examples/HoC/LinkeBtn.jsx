import { useState } from "react";

const LikeBtn = (props) => {
  const { style, count, onLike } = props;
  return (
    <>
      <button style={style} onClick={onLike}>Like</button>
      <span>{count}</span>
    </>
  );
};

const WithLike = (WrappedComponet) => {
  const [count, setCount] = useState(0);

  return function (props) {
    return (
      <WrappedComponet
        {...props}
        count={count}
        onLike={() => setCount((prev) => prev + 1)}
      />
    );
  };
};

const LikeBtnWithCount = WithLike(LikeBtn);
<LikeBtnWithCount style={{ display: "block", color: "blue" }} />;
