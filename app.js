const app = Vue.createApp({
    data() {
        return {
            searchQuery: '',
            buildings: []
        };
    },
    mounted() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                this.buildings = data;
            });
    },
    computed: {
        filteredBuildings() {
            return this.buildings.filter(building =>
                building.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    methods: {
        getAllRooms(building) {
            return Object.values(building.floors).flat(); // Combine all floors into a single room list
        },
        handleBuildingClick(building) {
            alert(`You clicked on ${building.name}!`);
            // You can replace this with navigation or showing more details
        }
    }
    
});

app.mount('#app');
