import ChatBorder from "../components/ChatBorder";
import ContentArea from "../components/ContentArea";
import "./About.css";
import "../components/ContentArea.css";
import MyData from "../components/MyData";

function About() {
  return (
    <div className="about">
      <ChatBorder className="chat-border-left" content="" />
      <ContentArea
        header="About"
        description={
          <>
          <p>
          This is a chatbot that is meant to help Ukrainian refugees in Poland
          by providing them with accurate information regarding Polish laws,
          regulations, organizations and support groups.
          <br />
          <br />
          Mainly, it is a project for my own learning and practice, but I hope it will be useful for some people. 
          Since you are reading this in English, I assume you are not Ukrainian. I'm glad to see you here. 
          I kindly ask you to consider donating to the organizations I've listed in the Donate page. Every little bit helps.
          <br />
          <br />
          And feel free to check out my Genius page. I upload translations of awesome Ukrainian music there :)
          </p>
          </>
        }
        data={MyData}
      />
      <ChatBorder className="chat-border-right" content="" />
    </div>
  );
}

export default About;
