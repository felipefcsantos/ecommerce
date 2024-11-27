import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import styles from "./styles.module.css";

const SubHeader = ({ page }: { page: string }) => {
  return (
    <div className={styles.container}>
      <span>Ecommerce</span> <ArrowForwardIosOutlinedIcon className={styles.icon} /> {page}
    </div>
  );
};

export default SubHeader;
