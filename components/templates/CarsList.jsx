import { useRouter } from "next/router";
import styles from "./CarsList.module.css";
import Back from "../icons/Back";
import Card from "../module/Card";

function CarsList({data}) {
  const router = useRouter();

  return <div className={styles.container}>
    <div className={styles.back} onClick={() => router.push("/cars")}>
        <Back />
        <p>back</p>
    </div>
    <div className={styles.cards}>
        {data.map(item => <Card key={item.id} {...item}/>)}
    </div>
  </div>;
}

export default CarsList;
