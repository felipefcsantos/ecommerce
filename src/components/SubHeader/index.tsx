import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import styles from "./styles.module.css";

const SubHeader = ({
  page,
  title,
}: {
  page: string;
  title?: string | undefined;
}) => {
  return (
    <div className={styles.container}>
      {title && <h2>{title}</h2>}
      <div>
        <span>Ecommerce</span>
        <ArrowForwardIosOutlinedIcon className={styles.icon} /> {page}
      </div>
    </div>
  );
};

export default SubHeader;
