import s from './LoadMoreBtn.module.css';

type Props = {
    onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: Props) => {
    
    return (
        <button onClick={onClick} className={s.loadmore}>Load More</button>
    )
};

export default LoadMoreBtn;