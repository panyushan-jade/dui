import React, { useEffect } from "react";
import { storiesOf } from "@storybook/react";
import Frame from 'react-frame-component';
import BackTop from "./index";


const defaultBackTop = () => {

    useEffect(() => {
        const iframeDocument: any = document.querySelector('iframe')
        
        iframeDocument.onload = function () {
            const div = iframeDocument.contentWindow.document
            console.log('div: ', div);
            console.log('div===>: ', div.getElementsByClassName('dui-back-top'));
            div.getElementsByClassName('dui-back-top')[0].style.position = 'fixed'
            div.getElementsByClassName('dui-back-top')[0].style.right = '100px'
            div.getElementsByClassName('dui-back-top')[0].style.bottom = '50px'
            div.getElementsByClassName('dui-back-top')[0].style.cursor = 'pointer'
            div.getElementsByClassName('dui-back-top')[0].style.color = '#000000d9'
            div.getElementsByClassName('dui-back-top')[0].style.fontSize = '14px'
        }
    },[])
    return <Frame>
            <div style={{height:400,width:600,position:'relative',overflow:'scroll'}}>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <BackTop />
            </div>
        </Frame>
};

storiesOf("BackTop 回到顶部", module)
  .add("BackTop", defaultBackTop)
//   .add("被禁用的 Input", disabledInput)
//   .add("带图标的 Input", iconInput)
//   .add("大小不同的 Input", sizeInput)
//   .add("带前后缀的 Input", pandInput);
