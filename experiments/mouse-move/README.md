# Experiment: Mouse Move

- The code slices inside this folder are used to record mouse movement and save the data to a file.
- They should not be used in production, since it relies on `nodeIntegration:true` in the Electron main process which is a security risk.

## How to run

### Start the experiment recorder

```sh
npm run start:exp:mouse-move
```

### Show the graph

```sh
cd experiments/mouse-move

python -m http.server

open http://localhost:8000/graph.html
```
