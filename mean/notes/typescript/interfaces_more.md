
Interfaces can be used simmilarly to Data types in declaration, Data types have a strict styling, they follow a pre determined standard like a prototype function. When you create an interface its like creating your own prototype of its ilk. Ensure your ineterfaces are moldular and imported.

The ? After the key of name is an Optional Demarker for when a field is not required from an interface or class structure

INTERFACES can and often should include functions. 

Ensure to take the time to write typescript within the typescript playground from the typescript documentation site. 
<script>
// Not using an interface
function printName(user: { name: string }): void{
	console.log(user.name);
	return;
}
// Using an Interface
interface UserInterface {
	name: string
}
function printName(user: UserInterface): void{
	console.log(user.name);
	return;
}

//Using an interface 
interface UserInterface {
	name: string
	cellNumber?: number;
}
function printName(user: UserInterface): void{
	console.log(user.name);
	if (user.cellNumber){ console.log(user.cellNumber) }
	return;
}

</script>