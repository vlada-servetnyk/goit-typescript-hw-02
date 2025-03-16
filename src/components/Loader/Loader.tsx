import { InfinitySpin } from "react-loader-spinner";
import s from './Loader.module.css'

const Loader = () => {
  return (
    <div className={s.loader_wrapper}>
      <InfinitySpin
        width="200"
        color="#4800fd"
      />
    </div>  
    )
};

export default Loader;