import React,{useEffect,useState} from "react";

function Loading(props) {
  const [content, setContent] = useState();
  const loadData = async () => {
    setContent(props.content);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
      <>
  <div className="loader"></div>
  {console.log("nottt working")}
  </>
  )
}

export default Loading;