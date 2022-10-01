import './Board.css';

function Board () {
    return (
        <div>
            <h2>Battlefield</h2>
            <div className="container" align="center">
            {
                Array(5).fill(0).map((tile, i) => {
                    return <Line key={i} tiles={10 - (i % 2)} />
                })
            }
        </div>
        </div>

    );
}

function Line ({tiles}) {
    return (
        <div className={`hex-layer-${tiles}`}>
            {
            Array(tiles).fill(0).map((tile, i) => <div key={i} className="hex"></div>)
            }
        </div>
    )
} 

export default Board;