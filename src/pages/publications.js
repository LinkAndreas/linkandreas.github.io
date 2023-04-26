import React from "react";
import PublicationItem from "../components/PublicationItem";
import styles from "../styles/Publications.module.css";

export default function Publications() {
  return (
    <div className={styles.publicationsContainer}>
      <div>
        <h2>2018</h2>
        <PublicationItem
          authors="Christian Corsten, Simon Voelker, Andreas Link and Jan Borchers"
          title="Use the Force Picker, Luke: Space-Efficient Value Input on Force-Sensitive Mobile Touchscreens"
          publishedIn="In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems, CHI '18, pages 661:1–661:12, ACM"
          location="New York, NY, USA"
          date="April 2018"
          pdfLink="https://hci.rwth-aachen.de/publications/corsten2018a.pdf"
          bibTexLink="https://hci.rwth-aachen.de/bibtex?cite=corsten2018a"
        />
        <h2>2017</h2>
        <PublicationItem
          authors="Andreas Link"
          title="Bidirectional Force Input: Increasing and Decreasing Values on Mobile Devices with the Thumb"
          publishedIn="Masters's Thesis"
          location="RWTH Aachen University, Aachen"
          date="September 2017"
          pdfLink="https://hci.rwth-aachen.de/publications/link2017a.pdf"
          bibTexLink="https://hci.rwth-aachen.de/bibtex?cite=link2017a"
        />
        <h2>2016</h2>
        <PublicationItem
          authors="Christian Corsten, Andreas Link, Thorsten Karrer and Jan Borchers"
          title="Understanding Back-to-front Pinching for Eyes-free Mobile Touch Input"
          publishedIn="In Proceedings of the 18th International Conference on Human-Computer Interaction with Mobile Devices and Services, MobileHCI '16, pages 185–189, ACM"
          location="New York, NY, USA"
          date="September 2016"
          pdfLink="https://hci.rwth-aachen.de/publications/corsten2016a.pdf"
          bibTexLink="https://hci.rwth-aachen.de/bibtex?cite=corsten2016a"
        />
        <h2>2015</h2>
        <PublicationItem
          authors="Andreas Link"
          title="Understanding Back-to-Front Pinching for Eyes-Free Mobile Touch Input"
          publishedIn="Bachelor's Thesis"
          location="RWTH Aachen University, Aachen"
          date="September 2015"
          pdfLink="https://hci.rwth-aachen.de/publications/link2015a.pdf"
          bibTexLink="https://hci.rwth-aachen.de/bibtex?cite=link2015a"
        />
      </div>
    </div>
  );
}
