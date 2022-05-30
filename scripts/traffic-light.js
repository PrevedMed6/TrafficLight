function createTrafficLight(container, color1='red',  color2='yellow', color3='green') {
  let counter = 0;
  if(!container)
  {
    return;
  };

  function createTrafficLightBox() {
    const trafficLightBox = document.createElement('div');
    trafficLightBox.classList.add('traffic-light');
    return trafficLightBox;
  };

  function createTrafficLightElement()
  {
    const trafficLightElement = document.createElement('div');
    trafficLightElement.classList.add('traffic-light__element');
    return trafficLightElement;
  };

  function createCircle (color)
  {
    const circleElement = document.createElement('div');
    circleElement.classList.add('traffic-light__circle');
    circleElement.style.backgroundColor=color;
    const blackCircleElement = document.createElement('div');
    blackCircleElement.classList.add('traffic-light__black-circle');
    circleElement.append(blackCircleElement);
    return circleElement;
  };

  function createTrafficButton (buttonName, event, isRedButton = false)
  {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = buttonName;
    buttonElement.classList.add('traffic-light__button');
    if (isRedButton)
    {
      buttonElement.classList.add('traffic-light__red');
    }
    buttonElement.addEventListener('click',function(evt){
      event(evt);
    });
    return buttonElement;
  };

  function manualMode ()
  {
    const activeCircle = trafficLightBox.querySelector(".traffic-light__black-circle_hidden");
    activeCircle?.classList.remove('traffic-light__black-circle_hidden');
    blackCircleElements[counter].classList.add('traffic-light__black-circle_hidden');
    counter = counter < 2 ? counter+1 : 0;
  };

  function autoMode ()
  {
    const activeCircle = trafficLightBox.querySelector(".traffic-light__black-circle_hidden");
    activeCircle?.classList.remove('traffic-light__black-circle_hidden');
    blackCircleElements.forEach(function(el, index){
      el.classList.add(`traffic-light__animation-color${index+1}`);
    });
    trafficLightBox.append(createTrafficButton ("Stop", stopAutoMode, true));
  };

  function stopAutoMode(evt)
  {
    blackCircleElements.forEach(function(el, index){
      el.classList.remove(`traffic-light__animation-color${index+1}`);
    });
    evt.target.remove();
  }

  const trafficLightBox = createTrafficLightBox();
  const trafficLightElement = createTrafficLightElement();
  trafficLightElement.append(createCircle(color1));
  trafficLightElement.append(createCircle(color2));
  trafficLightElement.append(createCircle(color3));
  trafficLightBox.append(trafficLightElement);
  trafficLightBox.append(createTrafficButton('Switch', manualMode));
  trafficLightBox.append(createTrafficButton('Automatic mode', autoMode));
  container.append(trafficLightBox);
  const blackCircleElements = trafficLightBox.querySelectorAll('.traffic-light__black-circle');
}



