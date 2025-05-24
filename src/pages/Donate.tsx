import ChatBorder from "../components/ChatBorder";
import ContentArea from "../components/ContentArea";
import "./Donate.css";
import FoundationsData from "../components/FoundationsData";
function Donate() {
  return (
    <div className="donate">
      <ChatBorder className="chat-border-left" content="" />
      <ContentArea
        header="Help Ukraine!"
        description={<p>
        Hi! Since you are reading this in English, I assume you are not Ukrainian. 
        Thank you for being here. I kindly ask you to consider donating to the organizations you see on the right side of the page.
        <br />
        <br />
        I know you have worries of your own and money ain't easy. You don't need to donate a lot. 
        These are one of the most trustworthy and effective organizations in the country.
        If you do spare a few bucks, you can be sure that your money will be used to change someone's life for the better.
        <br />
        <br />
        Every little bit counts.
        </p>}
        data={FoundationsData.EN}
      />
      <ChatBorder className="chat-border-right" content="" />
    </div>
  );
}

export default Donate;
