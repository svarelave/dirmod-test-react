import React from 'react';
import {PriceService} from 'services';
import axios, {CancelTokenSource} from 'axios';
import {quitLoading, setLoading} from 'utils'
import {ValueType, OptionsType} from 'react-select'
import CreatableSelect from 'react-select/creatable';
import { ConnectedProps, connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { WithTranslation } from "react-i18next";
import { RootState } from "reducers";
import {Coin} from 'models'
import { IDataTableColumn } from "react-data-table-component";
import {DataTable, Button} from 'components'

interface coinLocal{
    label: string;
    value: string;
    __isNew__?: boolean;
}

const mapState = (state: RootState) => ({
    user: null,
});
  
const connector = connect(mapState);

type Props = ConnectedProps<typeof connector> &
  RouteComponentProps<null> &
  WithTranslation;

export type State = {
    isSubmit: boolean;
    showErrors: boolean;
    errors: string;
    coins: OptionsType<coinLocal>;
    data: Coin[];
    coinBase: coinLocal;
    coinsValues: coinLocal[];
    columns: IDataTableColumn<Coin>[]
};
  
export const initialState: State = {
    isSubmit: false,
    showErrors: false,
    errors: "",
    data: [],
    coinBase: {
        label: 'ARS',
        value: 'ARS'
    },
    coinsValues: [],
    columns: [
        {
            name: 'Moneda Base',
            sortable: true,
            cell: (row) => <div>{row.source}</div>,
        },
        {
            name: 'Moneda a Comparar',
            sortable: true,
            cell: (row) => <div>{row.target}</div>,
        },
        {
            name: 'Valor',
            sortable: true,
            cell: (row) => <div>{row.amount}</div>,
        },
    ],
    coins: [
        {
            label: 'EUR',
            value: 'EUR'
        },
        {
            label: 'USD',
            value: 'USD'
        },
        {
            label: 'BRL',
            value: 'BRL'
        },
        {
            label: 'ARS',
            value: 'ARS'
        }
    ]
};

class Prices extends React.Component<Props, State>{

    state: State
    public source: CancelTokenSource;
    constructor(props: Props) {
        super(props);
    
        this.state = initialState;
        const cancelToken = axios.CancelToken;
    
        this.source = cancelToken.source();
    }

    componentDidMount(){
        this.load()
        setInterval(() => {
            this.load(true)
        }, 5000)
    }

    load = async (afterLoad: boolean = false) => {
        setLoading()
        const items = [... afterLoad ? this.state.coinsValues : this.state.coins]
        const res = await PriceService.get(
            items.map((element: coinLocal) => {
                return  element.value
            }),
            this.state.coinBase.value)
        this.setState({
            data: res.prices,
            coinsValues: [... this.state.coins]
        })
        quitLoading()
    }

    handleChange = (value: ValueType<coinLocal> | ValueType<coinLocal[]>, index: string) => {
        if(value){
            //@ts-ignore
            this.setState({
                [index]: value,
                coins: value && Array.isArray(value) && value !== this.state.coins ? value : this.state.coins
            }, () => {
                this.load(true)
            })
        }
    };

    render(){
        return(
            <div className="prices" style={{marginTop: '2rem'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <label>Moneda Base</label>
                            <CreatableSelect
                                isClearable
                                onChange={(val: ValueType<coinLocal>) => this.handleChange(val, 'coinBase')}
                                options={this.state.coins}
                                value={this.state.coinBase}
                            />
                        </div>
                        <div className="col-5">
                            <label>Monedas Referenciales</label>
                            <CreatableSelect
                                isClearable
                                isMulti
                                onChange={(val: ValueType<coinLocal>) => this.handleChange(val, 'coinsValues')}
                                options={this.state.coins}
                                value={this.state.coinsValues}
                            />
                        </div>
                        <div className="col-2">
                            <Button
                                onClick={() => this.load(true)}
                                className="btn btn-primary"
                                style={{
                                    marginTop: '2rem'
                                }}
                            >
                                Buscar
                            </Button>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '2rem'}}>
                        <div className="col-md mb-3">
                            <DataTable
                                title={'Tasas de Cambio'}
                                columns={this.state.columns}
                                data={this.state.data}
                                noDataComponent={'Sin resultados'}
                                filterTextColumns={["target"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prices;