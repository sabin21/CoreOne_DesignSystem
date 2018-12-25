
import React, { Component } from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';
import { Accordion, AccordionItem } from '../../carbon-react';

export class DocComAccordion extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Accordion" intro="Accordion을 사용하여 사용자가 컨텐츠 영역을 열거나 닫을 수 있도록 한다"></DocHeader>
                    <div className="container guide">

                        <h4>Accordion</h4>
                        <div className="row">
                            <div className="component-example col">

                                <div className="example-box">
                                    <div className="inner-wrap">
                                        <Accordion>
                                            <AccordionItem title="아코디언 타이틀 첫번째">
                                                <p>
                                                    디지털 제품의 디자인은 아직 유아기에 있습니다. 우리는 이 일을 해나가면서 점차 이 일을 어떻게 해야 하는지를 알아채고 
                                                    있지요. 뭔가 알아챘다 싶으면 상황은 다시 변하죠. 기술은 발전하고, 팀은 커지고, 경쟁이 일어나고, 결국은 겨우 마련했던 프로세스는 또다시 망가집니다. 
                                                </p>
                                            </AccordionItem>
                                            <AccordionItem title="아코디언 타이틀 두번째">
                                                <p>
                                                    계획은 세우기가 무섭게 한물간 물건이 됩니다. 의지할 만한 일종의 청사진이 없으니, 그렇게 많은 소프트웨어가 결국엔 제 무게를 이기지 못하고 무너지는 것도 놀랄 일은 아닙니다. <br/><br/>우리가 올바른 방향을 정하고 또 지켜내기 위해서는 무언가 필요하다는 것이 분명해 보입니다. 제품 개발의 어려운 면을 쉽게 만들어주고, 느린 부분은 빠르게 만들어주며, 모든 제품이 시간이 지나면서 빠지는 것으로 보이는 저 거대한 복잡함의 구덩이에서 우리가 벗어날 힘을 주는 무언가 말이죠.
                                                </p>
                                            </AccordionItem>
                                            <AccordionItem title="아코디언 타이틀 세번째">
                                                <p>
                                                    계획은 세우기가 무섭게 한물간 물건이 됩니다. 의지할 만한 일종의 청사진이 없으니, 그렇게 많은 소프트웨어가 결국엔 제 무게를 이기지 못하고 무너지는 것도 놀랄 일은 아닙니다. <br/><br/>우리가 올바른 방향을 정하고 또 지켜내기 위해서는 무언가 필요하다는 것이 분명해 보입니다. 제품 개발의 어려운 면을 쉽게 만들어주고, 느린 부분은 빠르게 만들어주며, 모든 제품이 시간이 지나면서 빠지는 것으로 보이는 저 거대한 복잡함의 구덩이에서 우리가 벗어날 힘을 주는 무언가 말이죠.
                                                </p>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>                                                                                        
                                </div>

                                <div className="example-code">
<Highlight>
{`
    <ul data-accordion class="c1--accordion">
        <li data-accordion-item class="c1--accordion__item">
            <button class="c1--accordion__heading" aria-expanded="false" aria-controls="pane1">
                <svg class="c1--accordion__arrow" width="7" height="12" viewBox="0 0 7 12">
                <path fill-rule="nonzero" d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z" />
                </svg>
                <div class="c1--accordion__title">아코디언 타이틀 첫번째</div>
            </button>
            <div id="pane1" class="c1--accordion__content">
                <p>디지털 제품의 디자인은 아직 유아기에 있습니다. 우리는 이 일을 해나가면서 점차 이 일을 어떻게 해야 하는지를 알아채고 
                있지요. 뭔가 알아챘다 싶으면 상황은 다시 변하죠. 기술은 발전하고, 팀은 커지고, 경쟁이 일어나고, 결국은 겨우 마련했던 프로세스는 또다시 망가집니다.</p>
            </div>
        </li>
        <li data-accordion-item class="c1--accordion__item">
            <button class="c1--accordion__heading" aria-expanded="false" aria-controls="pane1">
                <svg class="c1--accordion__arrow" width="7" height="12" viewBox="0 0 7 12">
                <path fill-rule="nonzero" d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z" />
                </svg>
                <div class="c1--accordion__title">아코디언 타이틀 두번째</div>
            </button>
            <div id="pane1" class="c1--accordion__content">
                <p>
                계획은 세우기가 무섭게 한물간 물건이 됩니다. 의지할 만한 일종의 청사진이 없으니, 그렇게 많은 소프트웨어가 결국엔 제 
                무게를 이기지 못하고 무너지는 것도 놀랄 일은 아닙니다. <br/><br/>우리가 올바른 방향을 정하고 또 지켜내기 위해서는 
                무언가 필요하다는 것이 분명해 보입니다. 제품 개발의 어려운 면을 쉽게 만들어주고, 느린 부분은 빠르게 만들어주며, 
                모든 제품이 시간이 지나면서 빠지는 것으로 보이는 저 거대한 복잡함의 구덩이에서 우리가 벗어날 힘을 주는 무언가 말이죠.
                </p>
            </div>
        </li>
        <li data-accordion-item class="c1--accordion__item">
            <button class="c1--accordion__heading" aria-expanded="false" aria-controls="pane1">
                <svg class="c1--accordion__arrow" width="7" height="12" viewBox="0 0 7 12">
                <path fill-rule="nonzero" d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z" />
                </svg>
                <div class="c1--accordion__title">아코디언 타이틀 세번째</div>
            </button>
            <div id="pane1" class="c1--accordion__content">
                <p>
                계획은 세우기가 무섭게 한물간 물건이 됩니다. 의지할 만한 일종의 청사진이 없으니, 그렇게 많은 소프트웨어가 결국엔 제 
                무게를 이기지 못하고 무너지는 것도 놀랄 일은 아닙니다. <br/><br/>우리가 올바른 방향을 정하고 또 지켜내기 위해서는 
                무언가 필요하다는 것이 분명해 보입니다. 제품 개발의 어려운 면을 쉽게 만들어주고, 느린 부분은 빠르게 만들어주며, 
                모든 제품이 시간이 지나면서 빠지는 것으로 보이는 저 거대한 복잡함의 구덩이에서 우리가 벗어날 힘을 주는 무언가 말이죠.
                </p>
            </div>
        </li>
    </ul>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>             
            </div>
        );
    }
}

export default DocComAccordion;
