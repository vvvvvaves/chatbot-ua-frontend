import RusorizIcon from "./icons/foundations/rusoriz/RusorizIcon";
import ComeBackAliveIconUA from "./icons/foundations/come_back_alive/ComeBackAliveIconUA";
import ComeBackAliveIconEN from "./icons/foundations/come_back_alive/ComeBackAliveIconEN";
import PrytulaIcon from "./icons/foundations/prytula/PrytulaIcon";
import HospitallersIcon from "./icons/foundations/hospitallers/HospitallersIcon";
import DobrobatUA from "./icons/foundations/dobrobat/DobrobatUA";
import DobrobatEN from "./icons/foundations/dobrobat/Dobrobat";
import UAnimals from "./icons/foundations/ua_animals/UAnimals";
import InsightEN from "./icons/foundations/insight/Insight";
import InsightUA from "./icons/foundations/insight/InsightUA";
import Starenki from "./icons/foundations/starenki/Starenki";
import DonorUA from "./icons/foundations/donor_ua/DonorUA";
import "./FoundationsData.css";
const FoundationsData = {
  UA: [
    {
      icon: <ComeBackAliveIconUA className="comeback-icon" />,
      title: "Повернись Живим",
      link: "https://savelife.in.ua/",
    },
    {
      icon: <RusorizIcon className="rusoriz-icon" />,
      title: "Русоріз",
      link: "https://www.sternenkofund.org/fundraisings/rusoriz",
    },
    {
      icon: <PrytulaIcon className="prytula-icon" />,
      title: "Благодійний фонд Сергія Притули",
      link: "https://prytulafoundation.org/",
    },
    {
      icon: <HospitallersIcon className="hospitallers-icon" />,
      title: "Госпітальєри",
      link: "https://www.hospitallers.life/",
    },
    {
      icon: <DobrobatUA className="dobrobat-icon" />,
      title: "Добробат",
      link: "https://www.dobrobat.in.ua/",
    },
    {
      icon: <UAnimals className="ua-animals-icon" fill10="green" fill11="blue" fill12="yellow"/>,
      title: "UAnimals",
      link: "https://uanimals.org/",
    },
    {
      icon: <InsightUA className="insight-icon" />,
      title: "Інсайт",
      link: "https://www.insight-ukraine.org/uk/",
    },
    {
      icon: <Starenki className="starenki-icon" />,
      title: "Старенькі",
      link: "https://starenki.com.ua/",
    },
    {
      icon: <DonorUA className="donor-ua-icon" />,
      title: "DonorUA",
      link: "https://www.donor.ua/",
    },
  ],
  EN: [
    {
      icon: <ComeBackAliveIconEN className="comeback-icon" />,
      title: "Come Back Alive",
      link: "https://savelife.in.ua/en/",
    },
    {
      icon: <RusorizIcon className="rusoriz-icon" />,
      title: "Rusoriz",
      link: "https://www.sternenkofund.org/en/fundraisings/rusoriz",
    },
    {
      icon: <PrytulaIcon className="prytula-icon" />,
      title: "Serhiy Prytula Charity Foundation",
      link: "https://prytulafoundation.org/en/",
    },
    {
      icon: <HospitallersIcon className="hospitallers-icon" />,
      title: "Hospitallers",
      link: "https://www.hospitallers.life/",
    },

    {
      icon: <DobrobatEN className="dobrobat-icon" fill0="aliceblue" />,
      title: "Dobrobat",
      link: "https://www.dobrobat.in.ua/en/",
    },
    {
      icon: <UAnimals className="ua-animals-icon" fill10="aliceblue" fill11="transparent" fill12="aliceblue"/>,
      title: "UAnimals",
      link: "https://uanimals.org/en/",
    },
    {
      icon: <Starenki className="starenki-icon" fill="aliceblue" />,
      title: "Starenki",
      link: "https://starenki.com.ua/en/",
    },
    {
      icon: <DonorUA className="donor-ua-icon" />,
      title: "DonorUA",
      link: "https://www.donor.ua/en",
    },
    {
      icon: <InsightEN className="insight-icon"/>,
      title: "InsightEN",
      link: "https://www.insight-ukraine.org/en/",
    },
  ],
};

export default FoundationsData;
