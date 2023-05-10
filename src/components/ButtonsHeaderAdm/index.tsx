import { Container } from "./styles";
import vector from '../../img/Vector1.svg'
import { useNavigate } from "react-router-dom";

export function ButtonsHeaderAdm({ isAdmin = false, title, style, ...rest }: { isAdmin?: boolean, title?: string, className?: any, style?: React.CSSProperties,onClick?: () => void }) {


    return (

        <Container  style={style} onClick={() => onclick} isAdmin={isAdmin}
            type="button"
            {...rest}
        >
          <div className="bu"> <img src={vector} alt="papel" /> <p>{title} </p></div>
        </Container>
    )
}