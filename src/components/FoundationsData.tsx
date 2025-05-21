import RusorizIcon from "./icons/RusorizIcon";
import ComeBackAliveIconUA from "./icons/ComeBackAliveIconUA";
import ComeBackAliveIconEN from "./icons/ComeBackAliveIconEN";
import PrytulaIcon from "./icons/PrytulaIcon";

const FoundationsData = {
  UA: [
    {
      icon: <ComeBackAliveIconUA className="comeback-icon"/>,
      title: "Повернись Живим",
      link: "",
    },
    {
      icon: <RusorizIcon className="rusoriz-icon"/>,
      title: "Русоріз",
      link: "",
    },
    {
      icon: <PrytulaIcon className="prytula-icon"/>,
      title: "Благодійний фонд Сергія Притули",
      link: "",
    },
  ],
  EN: [
    {
      icon: <ComeBackAliveIconEN className="comeback-icon"/>,
      title: "Come Back Alive",
      link: "",
    },
    {
    icon: <RusorizIcon className="rusoriz-icon"/>,
      title: "Rusoriz",
      link: "",
    },
    {
      icon: <PrytulaIcon className="prytula-icon"/>,
      title: "Serhiy Prytula Charity Foundation",
      link: "",
    },
  ],
};

export default FoundationsData;
