<template>

  <div id="div-button-data">
    <input type="file" id="file" ref="file" @change="loadCSV" accept=".csv"  class="file-input w-full max-w-xs" />
  </div>

  <div>
    <table id="myTable">
      <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td contenteditable="true"  v-for="(value, index) in row" :key="index">{{ value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import csvToJson from 'csvtojson';
export default {
  name: "data_ech0135",
  data() {
    return {
      csvData:[],
      headers: [],
      rows: [],
    };
  },
  methods: {


  loadCSV(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const csv = reader.result;
       const rows = csv.trim().split("\n");
        this.headers = rows.shift().split(",");
        this.rows = rows.map((row) => row.split(","));
        this.rows.forEach((row) => {
          if (row[1] === "") {
            row[1] = null;
          }
        });
     };
      reader.readAsText(file);
    },
  },
};




</script>

<style>
/* Style pour le titre */
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Style pour le bouton de sélection de fichier */
#picker {
  margin-bottom: 1rem;
}

/* Style pour le tableau */
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
}

/* Style pour les cellules */
td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}

/* Style pour les cellules de l'en-tête */
th {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
  font-weight: bold;
  background-color: #eee;
}

#div-button-data {
  display: flex;
}

#file-input {
  margin-top: 36px;
}

</style>