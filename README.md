## Running the Project

This project is deployed to Vercel [here](https://lo-orders.vercel.app/).

However, to run the development server, instructions are as follows:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Get started by clicking the grey square to search for and select a pair. To add more panels, click to the right of a panel. To close a panel, click the x icon.

## Technical Choices

I opted to approach this task in such a way that the result would yield an intuitive user experience, be mobile friendly and not be needlessly complicated. This approach largely informed my decisions.

### Next JS

Next JS was chosen because I find it to be the quickest way to get a React app up and running. Despite not requiring landmark features such as file based navigation or server side rendering in this use case, Next JS yielded benefits in making font loading, deployment and extensibility of a project like this easy.

### Tailwind CSS

Tailwind was used for styling which allowed for faster progress to be made than would have otherwise been possible.

### Assumptions

It was assumed that the selection of coin-exchange pairs would remain relatively consistent. A user must interact with a modal to select a pair, and the current implementation is such that only the pairs that have been received at the time of opening the modal show up.

## Areas For Improvement

There are a number of ways in which this project could be improved. I began exploring how the order volumes in particular could be updated outside of the React life cycle, directly manipulating the DOM. Zustand's transient updates looked promising, and with more time, I would certainly revisit this line of thinking.

Additionally, I opted to use the standard WebSocket API, and moreover didn't pay much mind to robustness and proper error handling. It may be more expedient to use a library such as socket.io which abstracts some of the fiddliness that can often be associated with web sockets away.

A better implementation of the modal would likewise be beneficial. Ideally, the list of coins and exchanges would be available at a REST endpoint so that they could be fetched and served immediately and unambiguously.

Finally, a better search and select mechanism that allows a user to scrub with arrow keys would also be desireable.
