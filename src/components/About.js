import "../styles/About.css";
import { motion } from "framer-motion";
import Appear from "./animations/Appear";
import { useTranslation } from "react-i18next";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};
function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="container mt-5"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-5 row information">
        <div className="about-me mb-2 col-12">{t("aboutMe")}</div>
        <div className="ragaca-span col-12">
          <Appear>
            მოგესალმებით, მე ვარ Junior Front end დეველოპერი, პროგრამირების
            შესწავლისას არჩევანი შევაჩერე ვებ-პროგრამირებაზე - კონკრეტულად Front
            end-ზე, რადგანაც მომეწონა იდეა, რომ ჩემი შრომა თვალსაჩინო იქნება
            ყველასთვის, ჩემს უნარ-ჩვევებს რაც შეეხება - ვარ მიზანდასახული,
            პასუხისმგებლიანი, გუნდში მუშაობის უნარიანი, განვითარებისკენ
            მიმართული პიროვნება.
          </Appear>
        </div>
      </div>
      <div className="information mb-5 row">
        <div className="about-me mb-2 col-12">ტექნიკური უნარები</div>
        <div className="ragaca-span">
          <Appear>
            მაქვს "Waterfall" და "Agile" მეთოდოლოგიებთან მუშაობის გამოცდილება.
            ყოველდღიურად განვითარების მიუხედავად ამ მომენტზე ვფლობ შემდეგ
            პროგრამირების ენებს/ბიბლიოთეკებს HTML, CSS, JavaScript, ReactJS,
            Redux, API, Framer Motion, REST API, BOOTSTRAP, Git, GitHub, VS
            Code, I18N, SASS და დროთა განმავლობაში ეს სია მხოლოდ გაიზრდება.
          </Appear>
        </div>
      </div>
      <div className="information mb-5 row">
        <div className="about-me mb-2 col-12">განათლება</div>
        <div className="ragaca-span">
          <Appear>
            2019 წელს ჩავირიცხე ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო
            უნივერსიტეტში ზუსტ და საბუნებისმეტყველო ფაკულტეტის კომპიუტერული
            მეცნიერების პროგრამაზე, სადაც წარმატებით მაქვს ჩაბარებული სადიპლომო
            ნაშრომი ამ მიმართულებით. ასევე გავლილი მაქვს "Geolab"-ის "Front end
            / React.js" კურსი.
          </Appear>
        </div>
      </div>
      <div className="information mb-5 row">
        <div className="about-me mb-2 col-12">სამუშაო გამოცდილება</div>
        <div className="ragaca-span">
          <Appear>
            ამ მომენტზე გამოცდილება მაქვს მხოლოდ "Imedi L" დაზღვევის კომპანიაში
            Junior Front end developer-ის პოზიციაზე, სადაც მუშაობის დაწყების
            თანავე ჩართული ვიყავი ძირითად პროექტში - მათი დაზღვევის ვებ-გვერდი,
            რომლის რამდენიმე მოდული მაქვს დაწერილი და ასევე ვმუშაობდი მთლიანი
            პროექტის "bug fixing"-ზე. 
          </Appear>
        </div>
      </div>
    </motion.div>
  );
}
export default About;
