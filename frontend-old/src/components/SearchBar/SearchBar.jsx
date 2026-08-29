import React from 'react';
import './search_bar.css';

const SearchBar = () => {
    return (
        <div className='search-container'>
            {/* 1. Select Section */}
            <div className='search-zone select-zone'>
                <i className="bi bi-filter"></i>
                <div className='text-wrapper'>
                    <span className='label'>TIPO DE SERVIÇO</span>
                    <div className='value-row'>
                        <select className="filter-select-input">
                            <option value="todos">SELECIONE O SERVIÇO</option>
                            <option value="longo-prazo">Longa Permanência</option>
                            <option value="creche">Creche Sênior</option>
                            <option value="reabilitacao">Reabilitação</option>
                        </select>
                        <i className="bi bi-chevron-down icon-chevron"></i>
                    </div>
                </div>
            </div>

            <div className='vertical-divider'></div>

            {/* 2. Input Section */}
            <div className='search-zone input-zone'>
                <i className="bi bi-search icon-magnifier"></i>
                <input 
                    type="text" 
                    placeholder="Busque por cuidador, unidades ou região..." 
                    className="search-input"
                />
            </div>

            {/* 3. Button Section */}
            <button className="btn-search">BUSCAR</button>
        </div>
    );
};

export default SearchBar;