import { Card, Image, Typography } from "antd";
import { rainyIcon } from "shared/media/imgs/index";
import styles from './WeatherForecast.module.scss';

const WeatherForecast = () => {
    return (
        <Card className={styles.weather_forecast_card}>
            <Typography.Title className={styles.title} level={5}>Baku, Azerbaijan</Typography.Title>
            <Typography className={styles.img_box}>
                <Image src={rainyIcon} className={styles.forecast_img} preview={false} />
            </Typography>
            <Typography.Paragraph className={styles.degree}>2&deg;</Typography.Paragraph>
            <Typography.Text className={styles.desc}>Cloudy</Typography.Text>
        </Card>
    )
}

export default WeatherForecast;