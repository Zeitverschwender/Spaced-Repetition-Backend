# Endpoints

## /repeatingitems

| Request Type | Params          | Description                                 |
| ------------ | --------------- | ------------------------------------------- |
| GET          | /:token         | Returns repeating items for user            |
| GET          | /:token/:itemID | Returns repeating item with itemID for user |
| POST         | /:token         | create repeating item for user              |
| PATCH        | /:token/:itemID | update repeating item for user              |
| DELETE       | /:token/:itemID | delete repeating item for user              |

### [Schema](../models/RepeatingItem.js)

#### RepeatingItem

| Name        | Type                     | Required | Note                                         |
| ----------- | ------------------------ | -------- | -------------------------------------------- |
| title       | String                   | true     | maxLength: 128                               |
| streakStart | Date                     | false    | default: Date.now                            |
| description | Number[]                 | false    | maxLength: 520                               |
| interval    | RepeatingInterval.schema | True     |                                              |
| phase       | Number                   | false    | default: 1, current index in interval.days[] |

## /repeatingintervals

| Request Type | Params              | Description                                                  |
| ------------ | ------------------- | ------------------------------------------------------------ |
| GET          | /                   | Returns global repeating intervals                           |
| GET          | /:token             | Returns repeating intervals for the given user               |
| GET          | /:token/:intervalID | Returns repeating interval with specified for the given user |
| POST         | /:token             | Create repeating interval for user                           |
| PATCH        | /:token/:intervalID | update repeating interval for user                           |
| DELETE       | /:token/:intervalID | delete repeating interval for user                           |

### [Schema](../models/RepeatingInterval.js)

#### RepeatingInterval

| Name        | Type     | Required | Note                                                |
| ----------- | -------- | -------- | --------------------------------------------------- |
| title       | String   | true     | maxLength: 128                                      |
| description | String   | false    | maxLength: 520                                      |
| days        | Number[] | True     | "Array of number of days before next notification." |

## /auth

| Request Type | Params           | Description                                 |
| ------------ | ---------------- | ------------------------------------------- |
| GET          | /google          | redirects to google login                   |
| GET          | /google/callback | not used by user, required for google login |
| GET          | /logout/:token   | logs out user with specified token          |

## /user

| Request Type | Params         | Description                                       |
| ------------ | -------------- | ------------------------------------------------- |
| GET          | /name/:token   | Returns username                                  |
| GET          | /photo/:token  | Returns photo                                     |
| GET          | /status/:token | Returns user status ("Logged In" or "Logged Out") |

## /login

| Request Type | Params | Description        |
| ------------ | ------ | ------------------ |
| GET          | /      | Returns session ID |

