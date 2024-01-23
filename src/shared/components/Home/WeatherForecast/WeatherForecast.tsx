import { Card, Image, Typography } from "antd";
import rainyIcon from 'shared/media/imgs/rainyicon.svg';

const WeatherForecast = () => {
    return (
        <Card className="weather-forecast-card">
            <Typography.Title className="title" level={5}>Baku, Azerbaijan</Typography.Title>
            <Typography className="img-box">
                <Image src={rainyIcon} className="forecast-img" style={{ width: '5rem', height: '5rem' }} preview={false} />
            </Typography>
            <Typography.Paragraph className="degree">2&deg;</Typography.Paragraph>
            <Typography.Text className="desc">Cloudy</Typography.Text>
        </Card>
    )
}

export default WeatherForecast;