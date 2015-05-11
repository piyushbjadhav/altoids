Added d support to add/query users and events.
Two tables: user and events. User can be queried by email id, events by title.

Added api to push events to kafka producer when an event is created/submitted.

*
Stuff to do:
Filter events based on client subscription.
write api to get ineterests from db on browser.
work on kafka consumer.