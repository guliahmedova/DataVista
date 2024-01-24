import { Card, Image, Typography } from "antd";
import welcomeAvatarfemale from 'shared/media/imgs/welcomeavatar.svg';

const Welcome = () => {
  return (
    <Card className="welcome-card">
      <Typography className="welcome-avatar-box" style={{
        width: '160px',
        height: 'auto',
        margin: '0 auto'
      }}>
        <Image src={welcomeAvatarfemale} className="welcome-avatar" preview={false} style={{
        }} />
      </Typography>
      <Typography.Text style={{
        fontWeight: '900',
        textAlign: 'center',
        display: 'block',
        fontSize: '1.5rem',
      }}>Welcome, Back!</Typography.Text>
    </Card>
  )
}

export default Welcome