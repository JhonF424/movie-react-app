export default function pagination(props) {

    /**
     *la @function getPages() itera tomando en cuenta el prop
     que recibe: @var this.props.total, retornando por cada índice un 
     elemento html que se modifica de manera dinámica con los demás props. 
     */
    function getPages() {
        const result = [];
        for (let i = 0; i < props.total; i++)
            result.push(<a onClick={() => props.onChange(i + 1)}
                className={props.page === (i + 1) ? "active" : ''}
                /*Se eliminó el href="#" para evitar redireccionamient*/>
                {(i + 1)}</a>);
        return result;
    }

    return (
        <>
            <div className="topbar-filter">
                <div className="pagination2">
                    <span>Page {props.page} of {props.total}:</span>
                    {getPages()}
                </div>
            </div>
        </>
    );
}