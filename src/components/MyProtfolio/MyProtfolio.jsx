import React, { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './MyProtfolio.scss';
import {
    allP,
    htmlAndCssP,
    reactP,
    commerceP,
    othersP
} from '../../data';

export default function MyProtfolio() {
    const [selected, setSelected] = useState("all");
    const [data, setData] = useState([]);
    console.log(data);
    const list = [
        {
            id: "all",
            title: "All"
        },
        {
            id: "htmlAndCss",
            title: "HTML&CSS"
        },
        {
            id: "react",
            title: "React Website"
        },
        {
            id: "commerce",
            title: "E-commerce"
        },
        {
            id: "others",
            title: "Others"
        }

    ];
    useEffect(() => {

        switch (selected) {
            case "all":
                setData(allP)
                break;
            case "htmlAndCss":
                setData(htmlAndCssP)
                break;
            case "react":
                setData(reactP)
                break;
            case "commerce":
                setData(commerceP)
                break;
            case "others":
                setData(othersP)
                break;

            default:
                setData(allP)
        }

    }, [selected])
    return (
        <div className="myProtfolio" id="myProtfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                    list.map((item) => (
                        <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                    ))
                }
            </ul>
            <div className="container">
                {
                    data.map((d) => (
                        <div className="item">
                            <img src={d.img} alt="" />
                            <h3>{d.title}</h3>
                        </div>
                    ))}
            </div>
        </div>
    )
}
