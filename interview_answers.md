# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

- functional components are also called stateless components accept data and display them. Also known as Stateful components because they implement logic and state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

- componentWillMount() is invoked immediately before mounting occurs. It is called before render() , therefore setting state in this method will not trigger a re-rendering. 

- The componentDidUpdate is particularly useful when an operation needs to happen after the DOM is updated and the update queue is emptied. It's probably most useful on complex renders and state or DOM changes or when you need something to be the absolutely last thing to be executed.

3. Define stateful logic.

- Stateful logic refers to a form of computational logic in which the same devices both store logic values and perform logical operations.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange to setup our test conditions, Act to query for the elements we are testing, Assert to assert what we expect.
