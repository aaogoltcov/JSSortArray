import { test } from "@jest/globals";
import sortCollection from "../sort";

test('should collection', () => {
  document.body.innerHTML = `
  <h1>Задание 2</h1>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead id="thead">
      <tr>
        <th id="id">id</th>
        <th id="title">title</th>
        <th id="year">year</th>
        <th id="imdb">imdb</th>
      </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
      </tbody>
    </table>
  </div>`;

  sortCollection();
  expect(document.getElementsByTagName('tbody')[0].children.length).toEqual(0);
})
