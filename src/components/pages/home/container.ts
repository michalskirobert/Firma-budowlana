import { useState } from "react";

import { INFO } from "./data";

import * as CONSTANTS from "@utils/constants";

export const useHomepageContainer = (): {
  isFittingsInstallationModalOpen: boolean;
  isDoorInstallationModalOpen: boolean;
  isDrainInstallationModalOpen: boolean;
  toggleDoorInstallationModal: () => void;
  toggleFittingsInstallationModal: () => void;
  toggleDrainInstallationModal: () => void;
  INFO: readonly {
    title: string;
    content: string;
    button: string | null;
    imgURL: string;
  }[];
  handleModals: (modal: string) => void;
} => {
  const [isFittingsInstallationModalOpen, setIsFittingsInstallationModalOpen] =
    useState<boolean>(false);
  const [isDoorInstallationModalOpen, setIsDoorInstalationModalOpen] =
    useState<boolean>(false);
  const [isDrainInstallationModalOpen, setIsDrainInstallationModalOpen] =
    useState<boolean>(false);

  const toggleFittingsInstallationModal = (): void =>
    setIsFittingsInstallationModalOpen(!isFittingsInstallationModalOpen);
  const toggleDoorInstallationModal = (): void =>
    setIsDoorInstalationModalOpen(!isDoorInstallationModalOpen);
  const toggleDrainInstallationModal = (): void =>
    setIsDrainInstallationModalOpen(!isDrainInstallationModalOpen);

  const handleModals = (modal: string): void => {
    switch (modal) {
      case CONSTANTS.DOOR_INSTALLATION:
        toggleDoorInstallationModal();
        break;
      case CONSTANTS.FITTINGS_INSTALLATION:
        toggleFittingsInstallationModal();
        break;
      case CONSTANTS.DRAIN_INSTALLATION:
        toggleDrainInstallationModal();
        break;
    }
  };

  return {
    INFO,
    isFittingsInstallationModalOpen,
    isDoorInstallationModalOpen,
    isDrainInstallationModalOpen,
    toggleFittingsInstallationModal,
    toggleDoorInstallationModal,
    toggleDrainInstallationModal,
    handleModals,
  };
};
