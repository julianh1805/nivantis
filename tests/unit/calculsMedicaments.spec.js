//import { jest } from '@vue/cli-plugin-unit-jest'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Calcul from '@/views/dmo/Calcul.vue'
//import { iterator } from 'core-js/fn/symbol'

let medicaments = [
    { id: 101, nom: "Produit 1", prix: 77, remise: 10 },
    { id: 135, nom: "Produit 2", prix: 3.99, remise: 0 },
    { id: 124, nom: "Produit 3", prix: 2.57, remise: 0 }
]

let coefficientMultiplicateur = 1.2

it('should emit the good prix achat net',()=>{
    const wrapper = shallowMount(Calcul)

    let medicament_1=medicaments[0]
    let medicament_2=medicaments[1]
    let medicament_3=medicaments[2]

    let test_medicament_1_prix_achat = wrapper.vm.calculPrixAchatNet(medicament_1.prix,medicament_1.remise)
    let test_medicament_2_prix_achat = wrapper.vm.calculPrixAchatNet(medicament_2.prix,medicament_2.remise)
    let test_medicament_3_prix_achat = wrapper.vm.calculPrixAchatNet(medicament_3.prix,medicament_3.remise)

    expect(test_medicament_1_prix_achat).equals("69.30")
    expect(test_medicament_2_prix_achat).equals("3.99")
    expect(test_medicament_3_prix_achat).equals("2.57")
});

it('should emit the good calcul taux de remise',()=>{
    const wrapper = shallowMount(Calcul)

    let medicament_1=medicaments[0]
    let medicament_2=medicaments[1]
    let medicament_3=medicaments[2]

    let medicament_1_prix_achat_net = wrapper.vm.calculPrixAchatNet(medicament_1.prix,medicament_1.remise)
    let medicament_2_prix_achat_net = wrapper.vm.calculPrixAchatNet(medicament_2.prix,medicament_2.remise)
    let medicament_3_prix_achat_net = wrapper.vm.calculPrixAchatNet(medicament_3.prix,medicament_3.remise)


    let test_medicament_1_taux_de_remise = wrapper.vm.calculTauxDeRemise(medicament_1_prix_achat_net,medicament_1.prix)
    let test_medicament_2_taux_de_remise = wrapper.vm.calculTauxDeRemise(medicament_2_prix_achat_net,medicament_2.prix)
    let test_medicament_3_taux_de_remise = wrapper.vm.calculTauxDeRemise(medicament_3_prix_achat_net,medicament_3.prix)

    console.log(test_medicament_1_taux_de_remise)
    console.log(test_medicament_2_taux_de_remise)
    console.log(test_medicament_3_taux_de_remise)

    expect(test_medicament_1_taux_de_remise).equals("10.00")
    expect(test_medicament_2_taux_de_remise).equals("0.00")
    expect(test_medicament_3_taux_de_remise).equals("0.00")
});

it('should emit the good calcul prix de vente net',()=>{
    const wrapper = shallowMount(Calcul)

    let medicament_1=medicaments[0]
    let medicament_2=medicaments[1]
    let medicament_3=medicaments[2]

    let medicament_1_prix_achat_net = wrapper.vm.calculPrixAchatNet(medicament_1.prix,medicament_1.remise)
    let medicament_2_prix_achat_net = wrapper.vm.calculPrixAchatNet(medicament_2.prix,medicament_2.remise)
    let medicament_3_prix_achat_net = wrapper.vm.calculPrixAchatNet(medicament_3.prix,medicament_3.remise)


    let test_medicament_1_prix_vente_net = wrapper.vm.calculPrixVenteNet(medicament_1_prix_achat_net,coefficientMultiplicateur)
    let test_medicament_2_prix_vente_net = wrapper.vm.calculPrixVenteNet(medicament_2_prix_achat_net,coefficientMultiplicateur)
    let test_medicament_3_prix_vente_net = wrapper.vm.calculPrixVenteNet(medicament_3_prix_achat_net,coefficientMultiplicateur)

    expect(test_medicament_1_prix_vente_net).equals("83.16")
    expect(test_medicament_2_prix_vente_net).equals("4.79")
    expect(test_medicament_3_prix_vente_net).equals("3.08")
});