gdjs.Modulo_324Code = {};
gdjs.Modulo_324Code.localVariables = [];
gdjs.Modulo_324Code.idToCallbackMap = new Map();
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_324Code.GDNextButtonObjects1= [];
gdjs.Modulo_324Code.GDNextButtonObjects2= [];
gdjs.Modulo_324Code.GDHandRObjects1= [];
gdjs.Modulo_324Code.GDHandRObjects2= [];
gdjs.Modulo_324Code.GDHandLObjects1= [];
gdjs.Modulo_324Code.GDHandLObjects2= [];
gdjs.Modulo_324Code.GDNewBBTextObjects1= [];
gdjs.Modulo_324Code.GDNewBBTextObjects2= [];
gdjs.Modulo_324Code.GDBreathObjects1= [];
gdjs.Modulo_324Code.GDBreathObjects2= [];
gdjs.Modulo_324Code.GDBreathingProgressObjects1= [];
gdjs.Modulo_324Code.GDBreathingProgressObjects2= [];
gdjs.Modulo_324Code.GDInspireObjects1= [];
gdjs.Modulo_324Code.GDInspireObjects2= [];


gdjs.Modulo_324Code.mapOfGDgdjs_9546Modulo_9595324Code_9546GDHandLObjects1Objects = Hashtable.newFrom({"HandL": gdjs.Modulo_324Code.GDHandLObjects1});
gdjs.Modulo_324Code.mapOfGDgdjs_9546Modulo_9595324Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_324Code.GDNextButtonObjects1});
gdjs.Modulo_324Code.mapOfGDgdjs_9546Modulo_9595324Code_9546GDInspireObjects1Objects = Hashtable.newFrom({"Inspire": gdjs.Modulo_324Code.GDInspireObjects1});
gdjs.Modulo_324Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Breath"), gdjs.Modulo_324Code.GDBreathObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_324Code.GDBreathObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDBreathObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17096156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_324Code.GDHandLObjects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDHandLObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Modulo_324Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDHandLObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_324Code.GDHandLObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_324Code.mapOfGDgdjs_9546Modulo_9595324Code_9546GDHandLObjects1Objects, gdjs.Modulo_324Code.mapOfGDgdjs_9546Modulo_9595324Code_9546GDNextButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_324Code.GDHandLObjects1 */
/* Reuse gdjs.Modulo_324Code.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.Modulo_324Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDHandLObjects1[i].setLayer("UI");
}
}
{for(var i = 0, len = gdjs.Modulo_324Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDHandLObjects1[i].setZOrder((( gdjs.Modulo_324Code.GDNextButtonObjects1.length === 0 ) ? 0 :gdjs.Modulo_324Code.GDNextButtonObjects1[0].getZOrder()) + 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_324Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_324Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_324Code.GDNextButtonObjects1[k] = gdjs.Modulo_324Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_324Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 5", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inspire"), gdjs.Modulo_324Code.GDInspireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_324Code.mapOfGDgdjs_9546Modulo_9595324Code_9546GDInspireObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 100));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(12 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(Math.max(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 0));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BreathingProgress"), gdjs.Modulo_324Code.GDBreathingProgressObjects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDBreathingProgressObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDBreathingProgressObjects1[i].setAnimationFrame(Math.round(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


};

gdjs.Modulo_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_324Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_324Code.GDHandRObjects1.length = 0;
gdjs.Modulo_324Code.GDHandRObjects2.length = 0;
gdjs.Modulo_324Code.GDHandLObjects1.length = 0;
gdjs.Modulo_324Code.GDHandLObjects2.length = 0;
gdjs.Modulo_324Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_324Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_324Code.GDBreathObjects1.length = 0;
gdjs.Modulo_324Code.GDBreathObjects2.length = 0;
gdjs.Modulo_324Code.GDBreathingProgressObjects1.length = 0;
gdjs.Modulo_324Code.GDBreathingProgressObjects2.length = 0;
gdjs.Modulo_324Code.GDInspireObjects1.length = 0;
gdjs.Modulo_324Code.GDInspireObjects2.length = 0;

gdjs.Modulo_324Code.eventsList0(runtimeScene);
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_324Code.GDHandRObjects1.length = 0;
gdjs.Modulo_324Code.GDHandRObjects2.length = 0;
gdjs.Modulo_324Code.GDHandLObjects1.length = 0;
gdjs.Modulo_324Code.GDHandLObjects2.length = 0;
gdjs.Modulo_324Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_324Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_324Code.GDBreathObjects1.length = 0;
gdjs.Modulo_324Code.GDBreathObjects2.length = 0;
gdjs.Modulo_324Code.GDBreathingProgressObjects1.length = 0;
gdjs.Modulo_324Code.GDBreathingProgressObjects2.length = 0;
gdjs.Modulo_324Code.GDInspireObjects1.length = 0;
gdjs.Modulo_324Code.GDInspireObjects2.length = 0;


return;

}

gdjs['Modulo_324Code'] = gdjs.Modulo_324Code;
