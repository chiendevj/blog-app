import Featured from "@/components/featured/Featured";
import styles from "@/app/homepage.module.css";
import CategoriesList from "@/components/categoriesList/CategoriesList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return <>
    <Featured/>
    <CategoriesList/>
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
  </>;
}
