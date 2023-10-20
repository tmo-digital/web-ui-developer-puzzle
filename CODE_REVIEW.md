Overall the code is written and very well-structured. Here are few things I have noticed while looking at the code
   - Input Validation: Input text can be validated and stop triggering search for bad inputs.
   - There are few places where unsubscribe from subscriptions created in ngOnInit is missing which could potentially caused memory leaks.
   - Better Error Handling during the search and error message can be improved.
