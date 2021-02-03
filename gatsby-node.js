exports.createPages = async ({ actions, graphql, reporter }) => {

    const resultado = await graphql(`
        query{
            allWordpressWpHabitaciones {
                nodes {
                    title
                    id
                    slug
                }
            }
            allWordpressWpPlanes {
                nodes {
                    slug
                    id
                }
            }
        }
    `);

    //Si no hay resultados mostrar el error
    if( resultado.errors ){
        reporter.panic( 'No se encontraron habitaciones', resultado.errors );
    }

    //Si hay resultados crear las páginas
    const habitaciones = resultado.data.allWordpressWpHabitaciones.nodes;

    habitaciones.forEach( habitacion => {

        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitacion.js'),
            context: {
                id: habitacion.id
            }
        });

    } );

    const planes = resultado.data.allWordpressWpPlanes.nodes;

    planes.forEach( plan => {

        actions.createPage({
            path: plan.slug,
            component: require.resolve( './src/components/plan.js' ),
            context: {
                id: plan.id
            }
        });

    } );

}