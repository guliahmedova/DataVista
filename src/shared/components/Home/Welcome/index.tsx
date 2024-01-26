import { Card, Image, Typography } from "antd";
import welcomeAvatarfemale from 'shared/media/imgs/welcomeavatar.svg';
import styles from './welcome.module.scss';

const Welcome = () => {
  return (
    <Card className={styles.welcome_card}>
      <Typography className={styles.welcome_avatar_box}>
        <Image src={welcomeAvatarfemale} className={styles.welcome_avatar} preview={false} />
      </Typography>
      <Typography.Text className={styles.welcome_text}>Welcome, Back!</Typography.Text>
    </Card>
  )
}

export default Welcome