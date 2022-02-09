'use strict'
let piecesDiagrams =(coordinates, axis, measure, dy)=>{
return {
    __I: {
        axis: {x:coordinates.x * 2, y: dy},
        horizontal: 
        [
{x:axis.x - measure, y: axis.y},
{x:axis.x, y:axis.y},
{x:axis.x + measure, y: axis.y},
{x:axis.x + measure*2, y: axis.y}
]
,
vertical: 
[
{x:axis.x , y: axis.y + measure},
{x:axis.x , y:axis.y},
{x:axis.x , y: axis.y - measure},
{x: axis.x , y:axis.y - measure*2}
],
horizontal2: [
{x:axis.x - measure, y:axis.y - measure},
{x:axis.x, y:axis.y - measure},
{x:axis.x + measure, y: axis.y - measure},
{x:axis.x + measure*2, y: axis.y - measure}
],
vertical2:[
{x:axis.x + measure , y: axis.y + measure},
{x:axis.x + measure , y:axis.y},
{x:axis.x + measure , y: axis.y - measure},
{x: axis.x + measure , y:axis.y - measure*2}
],
},
__O: {
axis: {x:coordinates.x * 2, y: dy},
horizontal: 
[
{x:axis.x, y: axis.y},
{x:axis.x + measure, y:axis.y},
{x:axis.x, y: axis.y - measure},
{x:axis.x + measure, y: axis.y - measure}
]
,
vertical: 
[
    {x:axis.x, y: axis.y},
    {x:axis.x + measure, y:axis.y},
{x:axis.x, y: axis.y - measure},
{x:axis.x + measure, y: axis.y - measure}
],
horizontal2: [
{x:axis.x, y: axis.y},
{x:axis.x + measure, y:axis.y},
{x:axis.x, y: axis.y - measure},
{x:axis.x + measure, y: axis.y - measure}
],
vertical2:[
    {x:axis.x, y: axis.y},
    {x:axis.x + measure, y:axis.y},
    {x:axis.x, y: axis.y - measure},
{x:axis.x + measure, y: axis.y - measure}
],
},

__T: {
    axis: {x:coordinates.x * 2, y: dy},
    horizontal: 
[
    {x:axis.x, y: axis.y - measure},
{x:axis.x - measure, y:axis.y},
{x:axis.x, y: axis.y},
{x:axis.x + measure, y: axis.y}
]
,
vertical: 
    [
        {x:axis.x + measure, y: axis.y},
        {x:axis.x, y:axis.y + measure},
        {x:axis.x, y: axis.y},
{x:axis.x, y: axis.y - measure}
],
horizontal2: [
    {x:axis.x, y: axis.y + measure},
    {x:axis.x - measure, y:axis.y},
    {x:axis.x, y: axis.y},
{x:axis.x + measure, y: axis.y}
],
vertical2:[
    {x:axis.x - measure, y: axis.y},
{x:axis.x , y:axis.y + measure},
{x:axis.x, y: axis.y},
{x:axis.x, y: axis.y - measure}
],
},

__Z: {
    axis: {x:coordinates.x * 2, y: dy},
    horizontal: 
    [
{x:axis.x - measure, y: axis.y - measure},
{x:axis.x, y:axis.y - measure},
{x:axis.x, y: axis.y},
{x:axis.x + measure, y: axis.y}
]
,
vertical: 
    [
{x:axis.x + measure, y: axis.y - measure },
{x:axis.x + measure, y:axis.y},
{x:axis.x, y: axis.y},
{x:axis.x, y: axis.y + measure}
],
horizontal2: [
    {x:axis.x + measure, y: axis.y + measure},
    {x:axis.x, y:axis.y + measure},
    {x:axis.x, y: axis.y},
    {x:axis.x - measure, y: axis.y}
],
vertical2:[
    {x:axis.x - measure, y: axis.y + measure},
    {x:axis.x - measure, y:axis.y},
    {x:axis.x, y: axis.y},
    {x:axis.x, y: axis.y - measure}
],
},

__S: {
    axis: {x:coordinates.x * 2, y: dy},
    horizontal: 
    [
{x:axis.x + measure, y: axis.y - measure},
{x:axis.x, y:axis.y - measure},
{x:axis.x, y: axis.y},
{x:axis.x - measure, y: axis.y}
]
,
vertical: 
[
    {x:axis.x - measure, y: axis.y - measure },
    {x:axis.x - measure, y:axis.y},
    {x:axis.x, y: axis.y},
    {x:axis.x, y: axis.y + measure}
],
horizontal2: [
    {x:axis.x - measure, y: axis.y + measure},
    {x:axis.x, y:axis.y + measure},
    {x:axis.x, y: axis.y},
{x:axis.x + measure, y: axis.y}
],
vertical2:[
    {x:axis.x - measure, y: axis.y - measure},
{x:axis.x - measure , y:axis.y},
{x:axis.x, y: axis.y},
{x:axis.x, y: axis.y + measure}
],
},

__J: {
    axis: {x:coordinates.x * 2, y: dy},
    horizontal: 
    [
{x:axis.x - measure, y: axis.y - measure},
{x:axis.x - measure, y:axis.y},
{x:axis.x, y: axis.y},
{x:axis.x + measure, y: axis.y}
]
,
vertical: 
[
{x:axis.x + measure, y: axis.y - measure },
{x:axis.x, y:axis.y - measure},
{x:axis.x, y: axis.y},
{x:axis.x, y: axis.y + measure}
],
horizontal2: [
    {x:axis.x + measure, y: axis.y + measure},
    {x:axis.x + measure, y:axis.y},
{x:axis.x, y: axis.y},
{x:axis.x - measure, y: axis.y}
],
vertical2:[
{x:axis.x - measure, y: axis.y + measure},
{x:axis.x , y:axis.y+ measure},
{x:axis.x, y: axis.y},
{x:axis.x, y: axis.y - measure}
],
},

__L: {
    axis: {x:coordinates.x * 2, y: dy},
horizontal: 
[
{x:axis.x + measure, y: axis.y - measure},
{x:axis.x + measure, y:axis.y},
{x:axis.x, y: axis.y},
{x:axis.x - measure, y: axis.y}
]
,
vertical: 
[
    {x:axis.x + measure, y: axis.y + measure },
    {x:axis.x, y:axis.y + measure},
{x:axis.x, y: axis.y},
{x:axis.x, y: axis.y - measure}
],
horizontal2: [
    {x:axis.x - measure, y: axis.y + measure},
    {x:axis.x - measure, y:axis.y},
{x:axis.x, y: axis.y},
{x:axis.x + measure, y: axis.y}
],
vertical2:[
{x:axis.x - measure, y: axis.y - measure},
{x:axis.x , y:axis.y - measure},
{x:axis.x, y: axis.y},
{x:axis.x, y: axis.y + measure}
],
}
};

}
export default piecesDiagrams;